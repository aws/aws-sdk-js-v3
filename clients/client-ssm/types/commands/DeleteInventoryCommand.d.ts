import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteInventoryRequest, DeleteInventoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInventoryCommandInput = DeleteInventoryRequest;
export declare type DeleteInventoryCommandOutput = DeleteInventoryResult & __MetadataBearer;
export declare class DeleteInventoryCommand extends $Command<DeleteInventoryCommandInput, DeleteInventoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteInventoryCommandInput;
    constructor(input: DeleteInventoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInventoryCommandInput, DeleteInventoryCommandOutput>;
    private serialize;
    private deserialize;
}
