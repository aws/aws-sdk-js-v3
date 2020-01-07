import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGroupCommandInput = DeleteGroupRequest;
export declare type DeleteGroupCommandOutput = __MetadataBearer;
export declare class DeleteGroupCommand extends $Command<DeleteGroupCommandInput, DeleteGroupCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteGroupCommandInput;
    constructor(input: DeleteGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGroupCommandInput, DeleteGroupCommandOutput>;
    private serialize;
    private deserialize;
}
