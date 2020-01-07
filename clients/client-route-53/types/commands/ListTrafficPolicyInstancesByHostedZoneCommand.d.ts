import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPolicyInstancesByHostedZoneRequest, ListTrafficPolicyInstancesByHostedZoneResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrafficPolicyInstancesByHostedZoneCommandInput = ListTrafficPolicyInstancesByHostedZoneRequest;
export declare type ListTrafficPolicyInstancesByHostedZoneCommandOutput = ListTrafficPolicyInstancesByHostedZoneResponse & __MetadataBearer;
export declare class ListTrafficPolicyInstancesByHostedZoneCommand extends $Command<ListTrafficPolicyInstancesByHostedZoneCommandInput, ListTrafficPolicyInstancesByHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTrafficPolicyInstancesByHostedZoneCommandInput;
    constructor(input: ListTrafficPolicyInstancesByHostedZoneCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrafficPolicyInstancesByHostedZoneCommandInput, ListTrafficPolicyInstancesByHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}
