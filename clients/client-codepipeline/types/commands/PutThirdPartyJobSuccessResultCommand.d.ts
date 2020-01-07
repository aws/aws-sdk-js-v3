import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutThirdPartyJobSuccessResultInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutThirdPartyJobSuccessResultCommandInput = PutThirdPartyJobSuccessResultInput;
export declare type PutThirdPartyJobSuccessResultCommandOutput = __MetadataBearer;
export declare class PutThirdPartyJobSuccessResultCommand extends $Command<PutThirdPartyJobSuccessResultCommandInput, PutThirdPartyJobSuccessResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutThirdPartyJobSuccessResultCommandInput;
    constructor(input: PutThirdPartyJobSuccessResultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutThirdPartyJobSuccessResultCommandInput, PutThirdPartyJobSuccessResultCommandOutput>;
    private serialize;
    private deserialize;
}
