import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPolicyInstancesByPolicyRequest, ListTrafficPolicyInstancesByPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrafficPolicyInstancesByPolicyCommandInput = ListTrafficPolicyInstancesByPolicyRequest;
export declare type ListTrafficPolicyInstancesByPolicyCommandOutput = ListTrafficPolicyInstancesByPolicyResponse & __MetadataBearer;
export declare class ListTrafficPolicyInstancesByPolicyCommand extends $Command<ListTrafficPolicyInstancesByPolicyCommandInput, ListTrafficPolicyInstancesByPolicyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTrafficPolicyInstancesByPolicyCommandInput;
    constructor(input: ListTrafficPolicyInstancesByPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrafficPolicyInstancesByPolicyCommandInput, ListTrafficPolicyInstancesByPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
