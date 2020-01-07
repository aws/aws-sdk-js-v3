import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeCommunicationsRequest, DescribeCommunicationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCommunicationsCommandInput = DescribeCommunicationsRequest;
export declare type DescribeCommunicationsCommandOutput = DescribeCommunicationsResponse & __MetadataBearer;
export declare class DescribeCommunicationsCommand extends $Command<DescribeCommunicationsCommandInput, DescribeCommunicationsCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeCommunicationsCommandInput;
    constructor(input: DescribeCommunicationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCommunicationsCommandInput, DescribeCommunicationsCommandOutput>;
    private serialize;
    private deserialize;
}
