import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { SetTypeDefaultVersionInput, SetTypeDefaultVersionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetTypeDefaultVersionCommandInput = SetTypeDefaultVersionInput;
export declare type SetTypeDefaultVersionCommandOutput = SetTypeDefaultVersionOutput & __MetadataBearer;
export declare class SetTypeDefaultVersionCommand extends $Command<SetTypeDefaultVersionCommandInput, SetTypeDefaultVersionCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: SetTypeDefaultVersionCommandInput;
    constructor(input: SetTypeDefaultVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetTypeDefaultVersionCommandInput, SetTypeDefaultVersionCommandOutput>;
    private serialize;
    private deserialize;
}
