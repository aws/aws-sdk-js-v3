import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteResourceConfigRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResourceConfigCommandInput = DeleteResourceConfigRequest;
export declare type DeleteResourceConfigCommandOutput = __MetadataBearer;
export declare class DeleteResourceConfigCommand extends $Command<DeleteResourceConfigCommandInput, DeleteResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteResourceConfigCommandInput;
    constructor(input: DeleteResourceConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceConfigCommandInput, DeleteResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}
