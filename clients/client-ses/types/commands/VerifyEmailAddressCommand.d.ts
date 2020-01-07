import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { VerifyEmailAddressRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type VerifyEmailAddressCommandInput = VerifyEmailAddressRequest;
export declare type VerifyEmailAddressCommandOutput = __MetadataBearer;
export declare class VerifyEmailAddressCommand extends $Command<VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput, SESClientResolvedConfig> {
    readonly input: VerifyEmailAddressCommandInput;
    constructor(input: VerifyEmailAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput>;
    private serialize;
    private deserialize;
}
