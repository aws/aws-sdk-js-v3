import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutResourceConfigRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutResourceConfigCommandInput = PutResourceConfigRequest;
export declare type PutResourceConfigCommandOutput = __MetadataBearer;
export declare class PutResourceConfigCommand extends $Command<PutResourceConfigCommandInput, PutResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutResourceConfigCommandInput;
    constructor(input: PutResourceConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourceConfigCommandInput, PutResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}
