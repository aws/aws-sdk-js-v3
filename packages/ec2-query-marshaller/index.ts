import {
    HttpRequest,
    HttpEndpoint,
    RequestSerializer,
    OperationModel,
    BodySerializer,
} from '@aws/types';

export class EC2Marshaller implements RequestSerializer<string> {
    constructor(
        private readonly endpoint: HttpEndpoint,
        private readonly bodySerializer: BodySerializer<string>
    ){}

    serialize(operation: OperationModel, input: any): HttpRequest<string> {
        return {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body:       this.bodySerializer.build(operation.input, input),
            protocol:   this.endpoint.protocol,
            hostname:   this.endpoint.hostname,
            port:       this.endpoint.port,
            path:       this.endpoint.path,
            query:      this.endpoint.query,
            method:     operation.http.method,
        };
    }
}

// export class EC2Unmarshaller<StreamType> implements ResponseParser<StreamType> {
//     constructor(
//         private readonly bodyParser: BodyParser<string>,
//         private readonly streamCollector: StreamCollector<StreamType>

//     ){}

//     parse<OutputType extends MetadataBearer>(
//         operation: OperationModel,
//         input: HttpResponse<StreamType>
//     ): Promise<OutputType> {      
//         return this.resolveToString(input)
//             .then((body) => {
//                 return this.bodyParser.parse<Partial<OutputType>>(operation.output, body)
//             })
//             .then((partialOutput) => {
//                 partialOutput.$metadata = extractMetadata(input);
//                 return partialOutput as OutputType;
//             });
//     }

//     private resolveToString(resp: HttpResponse<StreamType>): Promise<string> {
//         const {body = ''} = resp;
//         if (typeof body === 'string') {
//             return Promise.resolve(body);
//         }

//         let bufferPromise: Promise<Uint8Array>;
//         if (ArrayBuffer.isView(body)) {
//             bufferPromise = Promise.resolve(new Uint8Array(
//                 body.buffer,
//                 body.byteLength,
//                 body.byteOffset
//             ));
//         } else if (isArrayBuffer(body)) {
//             bufferPromise = Promise.resolve(new Uint8Array(
//                 body,
//                 0,
//                 body.byteLength
//             ));
//         } else {
//             bufferPromise = this.streamCollector(body);
//         }

//         return bufferPromise.then(buffer => this.utf8Encoder(buffer));
//     }
// }