import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteLoginProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoginProfileCommandInput = DeleteLoginProfileRequest;
export declare type DeleteLoginProfileCommandOutput = __MetadataBearer;
export declare class DeleteLoginProfileCommand extends $Command<DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteLoginProfileCommandInput;
    constructor(input: DeleteLoginProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput>;
    private serialize;
    private deserialize;
}
