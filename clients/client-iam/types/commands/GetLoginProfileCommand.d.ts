import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetLoginProfileRequest, GetLoginProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLoginProfileCommandInput = GetLoginProfileRequest;
export declare type GetLoginProfileCommandOutput = GetLoginProfileResponse & __MetadataBearer;
export declare class GetLoginProfileCommand extends $Command<GetLoginProfileCommandInput, GetLoginProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetLoginProfileCommandInput;
    constructor(input: GetLoginProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoginProfileCommandInput, GetLoginProfileCommandOutput>;
    private serialize;
    private deserialize;
}
