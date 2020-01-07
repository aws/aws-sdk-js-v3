import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { VerifyTrustRequest, VerifyTrustResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type VerifyTrustCommandInput = VerifyTrustRequest;
export declare type VerifyTrustCommandOutput = VerifyTrustResult & __MetadataBearer;
export declare class VerifyTrustCommand extends $Command<VerifyTrustCommandInput, VerifyTrustCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: VerifyTrustCommandInput;
    constructor(input: VerifyTrustCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyTrustCommandInput, VerifyTrustCommandOutput>;
    private serialize;
    private deserialize;
}
