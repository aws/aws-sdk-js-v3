import { CodeStarconnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarconnectionsClient";
import { GetConnectionInput, GetConnectionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConnectionCommandInput = GetConnectionInput;
export declare type GetConnectionCommandOutput = GetConnectionOutput & __MetadataBearer;
export declare class GetConnectionCommand extends $Command<GetConnectionCommandInput, GetConnectionCommandOutput, CodeStarconnectionsClientResolvedConfig> {
    readonly input: GetConnectionCommandInput;
    constructor(input: GetConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarconnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectionCommandInput, GetConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
