import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateInstanceProfileRequest, CreateInstanceProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInstanceProfileCommandInput = CreateInstanceProfileRequest;
export declare type CreateInstanceProfileCommandOutput = CreateInstanceProfileResponse & __MetadataBearer;
export declare class CreateInstanceProfileCommand extends $Command<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateInstanceProfileCommandInput;
    constructor(input: CreateInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
