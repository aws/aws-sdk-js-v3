import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetIdentityVerificationAttributesRequest, GetIdentityVerificationAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIdentityVerificationAttributesCommandInput = GetIdentityVerificationAttributesRequest;
export declare type GetIdentityVerificationAttributesCommandOutput = GetIdentityVerificationAttributesResponse & __MetadataBearer;
export declare class GetIdentityVerificationAttributesCommand extends $Command<GetIdentityVerificationAttributesCommandInput, GetIdentityVerificationAttributesCommandOutput, SESClientResolvedConfig> {
    readonly input: GetIdentityVerificationAttributesCommandInput;
    constructor(input: GetIdentityVerificationAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityVerificationAttributesCommandInput, GetIdentityVerificationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
