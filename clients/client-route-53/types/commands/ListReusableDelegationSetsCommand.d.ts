import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListReusableDelegationSetsRequest, ListReusableDelegationSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListReusableDelegationSetsCommandInput = ListReusableDelegationSetsRequest;
export declare type ListReusableDelegationSetsCommandOutput = ListReusableDelegationSetsResponse & __MetadataBearer;
export declare class ListReusableDelegationSetsCommand extends $Command<ListReusableDelegationSetsCommandInput, ListReusableDelegationSetsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListReusableDelegationSetsCommandInput;
    constructor(input: ListReusableDelegationSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReusableDelegationSetsCommandInput, ListReusableDelegationSetsCommandOutput>;
    private serialize;
    private deserialize;
}
