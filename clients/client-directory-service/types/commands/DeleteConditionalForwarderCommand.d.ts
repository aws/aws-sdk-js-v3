import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeleteConditionalForwarderRequest, DeleteConditionalForwarderResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConditionalForwarderCommandInput = DeleteConditionalForwarderRequest;
export declare type DeleteConditionalForwarderCommandOutput = DeleteConditionalForwarderResult & __MetadataBearer;
export declare class DeleteConditionalForwarderCommand extends $Command<DeleteConditionalForwarderCommandInput, DeleteConditionalForwarderCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeleteConditionalForwarderCommandInput;
    constructor(input: DeleteConditionalForwarderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConditionalForwarderCommandInput, DeleteConditionalForwarderCommandOutput>;
    private serialize;
    private deserialize;
}
