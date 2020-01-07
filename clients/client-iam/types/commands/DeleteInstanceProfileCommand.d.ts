import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteInstanceProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInstanceProfileCommandInput = DeleteInstanceProfileRequest;
export declare type DeleteInstanceProfileCommandOutput = __MetadataBearer;
export declare class DeleteInstanceProfileCommand extends $Command<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteInstanceProfileCommandInput;
    constructor(input: DeleteInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
