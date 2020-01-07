import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeFindingsRequest, DescribeFindingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFindingsCommandInput = DescribeFindingsRequest;
export declare type DescribeFindingsCommandOutput = DescribeFindingsResponse & __MetadataBearer;
export declare class DescribeFindingsCommand extends $Command<DescribeFindingsCommandInput, DescribeFindingsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeFindingsCommandInput;
    constructor(input: DescribeFindingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFindingsCommandInput, DescribeFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
