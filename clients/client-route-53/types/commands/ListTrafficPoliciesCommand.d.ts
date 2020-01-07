import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPoliciesRequest, ListTrafficPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrafficPoliciesCommandInput = ListTrafficPoliciesRequest;
export declare type ListTrafficPoliciesCommandOutput = ListTrafficPoliciesResponse & __MetadataBearer;
export declare class ListTrafficPoliciesCommand extends $Command<ListTrafficPoliciesCommandInput, ListTrafficPoliciesCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTrafficPoliciesCommandInput;
    constructor(input: ListTrafficPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrafficPoliciesCommandInput, ListTrafficPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
