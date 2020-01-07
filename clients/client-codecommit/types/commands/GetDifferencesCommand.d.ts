import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetDifferencesInput, GetDifferencesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDifferencesCommandInput = GetDifferencesInput;
export declare type GetDifferencesCommandOutput = GetDifferencesOutput & __MetadataBearer;
export declare class GetDifferencesCommand extends $Command<GetDifferencesCommandInput, GetDifferencesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetDifferencesCommandInput;
    constructor(input: GetDifferencesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDifferencesCommandInput, GetDifferencesCommandOutput>;
    private serialize;
    private deserialize;
}
