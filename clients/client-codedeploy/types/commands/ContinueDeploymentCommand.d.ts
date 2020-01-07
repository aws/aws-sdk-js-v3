import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ContinueDeploymentInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ContinueDeploymentCommandInput = ContinueDeploymentInput;
export declare type ContinueDeploymentCommandOutput = __MetadataBearer;
export declare class ContinueDeploymentCommand extends $Command<ContinueDeploymentCommandInput, ContinueDeploymentCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ContinueDeploymentCommandInput;
    constructor(input: ContinueDeploymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ContinueDeploymentCommandInput, ContinueDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
