import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateLoginProfileRequest, CreateLoginProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoginProfileCommandInput = CreateLoginProfileRequest;
export declare type CreateLoginProfileCommandOutput = CreateLoginProfileResponse & __MetadataBearer;
export declare class CreateLoginProfileCommand extends $Command<CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateLoginProfileCommandInput;
    constructor(input: CreateLoginProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput>;
    private serialize;
    private deserialize;
}
