import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetInstanceProfileRequest, GetInstanceProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceProfileCommandInput = GetInstanceProfileRequest;
export declare type GetInstanceProfileCommandOutput = GetInstanceProfileResponse & __MetadataBearer;
export declare class GetInstanceProfileCommand extends $Command<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetInstanceProfileCommandInput;
    constructor(input: GetInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
