import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetNamedQueryInput, GetNamedQueryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetNamedQueryCommandInput = GetNamedQueryInput;
export declare type GetNamedQueryCommandOutput = GetNamedQueryOutput & __MetadataBearer;
export declare class GetNamedQueryCommand extends $Command<GetNamedQueryCommandInput, GetNamedQueryCommandOutput, AthenaClientResolvedConfig> {
    readonly input: GetNamedQueryCommandInput;
    constructor(input: GetNamedQueryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNamedQueryCommandInput, GetNamedQueryCommandOutput>;
    private serialize;
    private deserialize;
}
