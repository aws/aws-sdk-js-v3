import type { ConfigurableSerdeContext, SerdeFunctions } from "@smithy/types";

/**
 * @internal
 */
export class SerdeContextConfig implements ConfigurableSerdeContext {
  protected serdeContext?: SerdeFunctions;

  public setSerdeContext(serdeContext: SerdeFunctions): void {
    this.serdeContext = serdeContext;
  }
}
