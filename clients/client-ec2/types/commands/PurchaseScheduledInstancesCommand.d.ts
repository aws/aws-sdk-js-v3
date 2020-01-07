import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseScheduledInstancesRequest, PurchaseScheduledInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PurchaseScheduledInstancesCommandInput = PurchaseScheduledInstancesRequest;
export declare type PurchaseScheduledInstancesCommandOutput = PurchaseScheduledInstancesResult & __MetadataBearer;
export declare class PurchaseScheduledInstancesCommand extends $Command<PurchaseScheduledInstancesCommandInput, PurchaseScheduledInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: PurchaseScheduledInstancesCommandInput;
    constructor(input: PurchaseScheduledInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseScheduledInstancesCommandInput, PurchaseScheduledInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
