import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListIdentityPoliciesRequest, ListIdentityPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListIdentityPoliciesCommandInput = ListIdentityPoliciesRequest;
export declare type ListIdentityPoliciesCommandOutput = ListIdentityPoliciesResponse & __MetadataBearer;
export declare class ListIdentityPoliciesCommand extends $Command<ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListIdentityPoliciesCommandInput;
    constructor(input: ListIdentityPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
