import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPolicyInstancesRequest, ListTrafficPolicyInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrafficPolicyInstancesCommandInput = ListTrafficPolicyInstancesRequest;
export declare type ListTrafficPolicyInstancesCommandOutput = ListTrafficPolicyInstancesResponse & __MetadataBearer;
export declare class ListTrafficPolicyInstancesCommand extends $Command<ListTrafficPolicyInstancesCommandInput, ListTrafficPolicyInstancesCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTrafficPolicyInstancesCommandInput;
    constructor(input: ListTrafficPolicyInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrafficPolicyInstancesCommandInput, ListTrafficPolicyInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
