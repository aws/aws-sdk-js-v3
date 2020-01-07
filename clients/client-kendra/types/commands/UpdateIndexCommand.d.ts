import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { UpdateIndexRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateIndexCommandInput = UpdateIndexRequest;
export declare type UpdateIndexCommandOutput = __MetadataBearer;
export declare class UpdateIndexCommand extends $Command<UpdateIndexCommandInput, UpdateIndexCommandOutput, kendraClientResolvedConfig> {
    readonly input: UpdateIndexCommandInput;
    constructor(input: UpdateIndexCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIndexCommandInput, UpdateIndexCommandOutput>;
    private serialize;
    private deserialize;
}
