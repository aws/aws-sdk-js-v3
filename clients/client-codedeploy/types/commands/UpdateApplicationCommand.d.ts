import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { UpdateApplicationInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateApplicationCommandInput = UpdateApplicationInput;
export declare type UpdateApplicationCommandOutput = __MetadataBearer;
export declare class UpdateApplicationCommand extends $Command<UpdateApplicationCommandInput, UpdateApplicationCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: UpdateApplicationCommandInput;
    constructor(input: UpdateApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApplicationCommandInput, UpdateApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
