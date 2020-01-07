import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetInvalidationRequest, GetInvalidationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInvalidationCommandInput = GetInvalidationRequest;
export declare type GetInvalidationCommandOutput = GetInvalidationResult & __MetadataBearer;
export declare class GetInvalidationCommand extends $Command<GetInvalidationCommandInput, GetInvalidationCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetInvalidationCommandInput;
    constructor(input: GetInvalidationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInvalidationCommandInput, GetInvalidationCommandOutput>;
    private serialize;
    private deserialize;
}
