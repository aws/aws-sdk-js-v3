import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPolicyVersionsRequest, ListTrafficPolicyVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrafficPolicyVersionsCommandInput = ListTrafficPolicyVersionsRequest;
export declare type ListTrafficPolicyVersionsCommandOutput = ListTrafficPolicyVersionsResponse & __MetadataBearer;
export declare class ListTrafficPolicyVersionsCommand extends $Command<ListTrafficPolicyVersionsCommandInput, ListTrafficPolicyVersionsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTrafficPolicyVersionsCommandInput;
    constructor(input: ListTrafficPolicyVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrafficPolicyVersionsCommandInput, ListTrafficPolicyVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
