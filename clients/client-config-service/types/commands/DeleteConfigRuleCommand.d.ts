import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConfigRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConfigRuleCommandInput = DeleteConfigRuleRequest;
export declare type DeleteConfigRuleCommandOutput = __MetadataBearer;
export declare class DeleteConfigRuleCommand extends $Command<DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteConfigRuleCommandInput;
    constructor(input: DeleteConfigRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
