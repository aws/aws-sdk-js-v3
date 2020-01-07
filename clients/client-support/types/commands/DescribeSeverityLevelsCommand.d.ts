import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeSeverityLevelsRequest, DescribeSeverityLevelsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSeverityLevelsCommandInput = DescribeSeverityLevelsRequest;
export declare type DescribeSeverityLevelsCommandOutput = DescribeSeverityLevelsResponse & __MetadataBearer;
export declare class DescribeSeverityLevelsCommand extends $Command<DescribeSeverityLevelsCommandInput, DescribeSeverityLevelsCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeSeverityLevelsCommandInput;
    constructor(input: DescribeSeverityLevelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSeverityLevelsCommandInput, DescribeSeverityLevelsCommandOutput>;
    private serialize;
    private deserialize;
}
