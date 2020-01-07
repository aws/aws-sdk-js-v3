import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { RequestUploadCredentialsInput, RequestUploadCredentialsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RequestUploadCredentialsCommandInput = RequestUploadCredentialsInput;
export declare type RequestUploadCredentialsCommandOutput = RequestUploadCredentialsOutput & __MetadataBearer;
export declare class RequestUploadCredentialsCommand extends $Command<RequestUploadCredentialsCommandInput, RequestUploadCredentialsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: RequestUploadCredentialsCommandInput;
    constructor(input: RequestUploadCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestUploadCredentialsCommandInput, RequestUploadCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
