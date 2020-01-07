import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ViewBillingRequest, ViewBillingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ViewBillingCommandInput = ViewBillingRequest;
export declare type ViewBillingCommandOutput = ViewBillingResponse & __MetadataBearer;
export declare class ViewBillingCommand extends $Command<ViewBillingCommandInput, ViewBillingCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: ViewBillingCommandInput;
    constructor(input: ViewBillingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ViewBillingCommandInput, ViewBillingCommandOutput>;
    private serialize;
    private deserialize;
}
