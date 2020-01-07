import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CopyDBParameterGroupMessage, CopyDBParameterGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyDBParameterGroupCommandInput = CopyDBParameterGroupMessage;
export declare type CopyDBParameterGroupCommandOutput = CopyDBParameterGroupResult & __MetadataBearer;
export declare class CopyDBParameterGroupCommand extends $Command<CopyDBParameterGroupCommandInput, CopyDBParameterGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: CopyDBParameterGroupCommandInput;
    constructor(input: CopyDBParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyDBParameterGroupCommandInput, CopyDBParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
