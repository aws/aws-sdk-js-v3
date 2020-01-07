import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { VerifyEmailIdentityRequest, VerifyEmailIdentityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type VerifyEmailIdentityCommandInput = VerifyEmailIdentityRequest;
export declare type VerifyEmailIdentityCommandOutput = VerifyEmailIdentityResponse & __MetadataBearer;
export declare class VerifyEmailIdentityCommand extends $Command<VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput, SESClientResolvedConfig> {
    readonly input: VerifyEmailIdentityCommandInput;
    constructor(input: VerifyEmailIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
