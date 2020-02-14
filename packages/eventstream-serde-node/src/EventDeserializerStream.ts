import { Transform, TransformOptions, TransformCallback } from "stream";

export type EventDeserializerStreamOptions = TransformOptions & {
  deserializer: (input: any) => any;
};

export class EventDeserializerStream extends Transform {
  private readonly deserializer: (input: any) => any;
  constructor(options: EventDeserializerStreamOptions) {
    super({
      readableObjectMode: true,
      writableObjectMode: true,
      ...options
    });
    this.deserializer = options.deserializer;
    //TODO: use 'autoDestroy' when targeting Node 11
    //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
    this.on("error", () => {
      this.destroy();
    });
    this.on("end", () => {
      this.destroy();
    });
  }

  async _transform(chunk: any, encoding: string, callback: TransformCallback) {
    try {
      this.push(await this.deserializer(chunk));
      return callback();
    } catch (err) {
      callback(err);
    }
  }
}
