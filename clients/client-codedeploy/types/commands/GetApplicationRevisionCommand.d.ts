import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetApplicationRevisionInput, GetApplicationRevisionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetApplicationRevisionCommandInput = GetApplicationRevisionInput;
export declare type GetApplicationRevisionCommandOutput = GetApplicationRevisionOutput & __MetadataBearer;
export declare class GetApplicationRevisionCommand extends $Command<GetApplicationRevisionCommandInput, GetApplicationRevisionCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetApplicationRevisionCommandInput;
    constructor(input: GetApplicationRevisionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApplicationRevisionCommandInput, GetApplicationRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
