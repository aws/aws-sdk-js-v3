import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetIdentityPoliciesRequest, GetIdentityPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIdentityPoliciesCommandInput = GetIdentityPoliciesRequest;
export declare type GetIdentityPoliciesCommandOutput = GetIdentityPoliciesResponse & __MetadataBearer;
export declare class GetIdentityPoliciesCommand extends $Command<GetIdentityPoliciesCommandInput, GetIdentityPoliciesCommandOutput, SESClientResolvedConfig> {
    readonly input: GetIdentityPoliciesCommandInput;
    constructor(input: GetIdentityPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityPoliciesCommandInput, GetIdentityPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
