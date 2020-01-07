import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeCasesRequest, DescribeCasesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCasesCommandInput = DescribeCasesRequest;
export declare type DescribeCasesCommandOutput = DescribeCasesResponse & __MetadataBearer;
export declare class DescribeCasesCommand extends $Command<DescribeCasesCommandInput, DescribeCasesCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeCasesCommandInput;
    constructor(input: DescribeCasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCasesCommandInput, DescribeCasesCommandOutput>;
    private serialize;
    private deserialize;
}
