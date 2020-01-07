import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { RegisterApplicationRevisionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterApplicationRevisionCommandInput = RegisterApplicationRevisionInput;
export declare type RegisterApplicationRevisionCommandOutput = __MetadataBearer;
export declare class RegisterApplicationRevisionCommand extends $Command<RegisterApplicationRevisionCommandInput, RegisterApplicationRevisionCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: RegisterApplicationRevisionCommandInput;
    constructor(input: RegisterApplicationRevisionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterApplicationRevisionCommandInput, RegisterApplicationRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
