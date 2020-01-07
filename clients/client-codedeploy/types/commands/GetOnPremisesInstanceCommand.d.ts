import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetOnPremisesInstanceInput, GetOnPremisesInstanceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOnPremisesInstanceCommandInput = GetOnPremisesInstanceInput;
export declare type GetOnPremisesInstanceCommandOutput = GetOnPremisesInstanceOutput & __MetadataBearer;
export declare class GetOnPremisesInstanceCommand extends $Command<GetOnPremisesInstanceCommandInput, GetOnPremisesInstanceCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetOnPremisesInstanceCommandInput;
    constructor(input: GetOnPremisesInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOnPremisesInstanceCommandInput, GetOnPremisesInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
