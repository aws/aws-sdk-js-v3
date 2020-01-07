import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateLoginProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateLoginProfileCommandInput = UpdateLoginProfileRequest;
export declare type UpdateLoginProfileCommandOutput = __MetadataBearer;
export declare class UpdateLoginProfileCommand extends $Command<UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateLoginProfileCommandInput;
    constructor(input: UpdateLoginProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput>;
    private serialize;
    private deserialize;
}
