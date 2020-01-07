import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateOpsItemRequest, UpdateOpsItemResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateOpsItemCommandInput = UpdateOpsItemRequest;
export declare type UpdateOpsItemCommandOutput = UpdateOpsItemResponse & __MetadataBearer;
export declare class UpdateOpsItemCommand extends $Command<UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateOpsItemCommandInput;
    constructor(input: UpdateOpsItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput>;
    private serialize;
    private deserialize;
}
