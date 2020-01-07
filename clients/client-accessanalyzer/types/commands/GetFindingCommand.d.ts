import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetFindingRequest, GetFindingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFindingCommandInput = GetFindingRequest;
export declare type GetFindingCommandOutput = GetFindingResponse & __MetadataBearer;
export declare class GetFindingCommand extends $Command<GetFindingCommandInput, GetFindingCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: GetFindingCommandInput;
    constructor(input: GetFindingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFindingCommandInput, GetFindingCommandOutput>;
    private serialize;
    private deserialize;
}
