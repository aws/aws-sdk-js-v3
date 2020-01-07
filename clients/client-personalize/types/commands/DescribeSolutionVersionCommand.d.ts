import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSolutionVersionRequest, DescribeSolutionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSolutionVersionCommandInput = DescribeSolutionVersionRequest;
export declare type DescribeSolutionVersionCommandOutput = DescribeSolutionVersionResponse & __MetadataBearer;
export declare class DescribeSolutionVersionCommand extends $Command<DescribeSolutionVersionCommandInput, DescribeSolutionVersionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeSolutionVersionCommandInput;
    constructor(input: DescribeSolutionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSolutionVersionCommandInput, DescribeSolutionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
