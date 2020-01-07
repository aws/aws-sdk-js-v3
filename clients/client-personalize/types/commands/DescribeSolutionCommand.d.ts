import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSolutionRequest, DescribeSolutionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSolutionCommandInput = DescribeSolutionRequest;
export declare type DescribeSolutionCommandOutput = DescribeSolutionResponse & __MetadataBearer;
export declare class DescribeSolutionCommand extends $Command<DescribeSolutionCommandInput, DescribeSolutionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeSolutionCommandInput;
    constructor(input: DescribeSolutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSolutionCommandInput, DescribeSolutionCommandOutput>;
    private serialize;
    private deserialize;
}
