"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HealthClient_1 = require("./HealthClient");
const DescribeAffectedAccountsForOrganizationCommand_1 = require("./commands/DescribeAffectedAccountsForOrganizationCommand");
const DescribeAffectedEntitiesCommand_1 = require("./commands/DescribeAffectedEntitiesCommand");
const DescribeAffectedEntitiesForOrganizationCommand_1 = require("./commands/DescribeAffectedEntitiesForOrganizationCommand");
const DescribeEntityAggregatesCommand_1 = require("./commands/DescribeEntityAggregatesCommand");
const DescribeEventAggregatesCommand_1 = require("./commands/DescribeEventAggregatesCommand");
const DescribeEventDetailsCommand_1 = require("./commands/DescribeEventDetailsCommand");
const DescribeEventDetailsForOrganizationCommand_1 = require("./commands/DescribeEventDetailsForOrganizationCommand");
const DescribeEventTypesCommand_1 = require("./commands/DescribeEventTypesCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeEventsForOrganizationCommand_1 = require("./commands/DescribeEventsForOrganizationCommand");
const DescribeHealthServiceStatusForOrganizationCommand_1 = require("./commands/DescribeHealthServiceStatusForOrganizationCommand");
const DisableHealthServiceAccessForOrganizationCommand_1 = require("./commands/DisableHealthServiceAccessForOrganizationCommand");
const EnableHealthServiceAccessForOrganizationCommand_1 = require("./commands/EnableHealthServiceAccessForOrganizationCommand");
/**
 * <fullname>AWS Health</fullname>
 *
 *          <p>The AWS Health API provides programmatic access to the AWS Health information
 *          that is presented in the <a href="https://phd.aws.amazon.com/phd/home#/">AWS Personal Health Dashboard</a>. You can get information about events that affect your AWS
 *          resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEvents</a>: Summary information about events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventDetails</a>: Detailed information about one or more
 *                events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedEntities</a>: Information about AWS resources
 *                that are affected by one or more events.</p>
 *             </li>
 *          </ul>
 *          <p>In addition, these operations provide information about event types and summary
 *          counts of events or affected entities:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEventTypes</a>: Information about the kinds of events
 *                that AWS Health tracks.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventAggregates</a>: A count of the number of events that
 *                meet specified criteria.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEntityAggregates</a>: A count of the number of affected
 *                entities that meet specified criteria.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>AWS Health integrates with AWS Organizations to provide a centralized view of AWS Health
 *          events across all accounts in your organization.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEventsForOrganization</a>: Summary information about
 *                events across the organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedAccountsForOrganization</a>: List of accounts in
 *                your organization impacted by an event.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventDetailsForOrganization</a>: Detailed information
 *                about events in your organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedEntitiesForOrganization</a>: Information about
 *                AWS resources in your organization that are affected by events.</p>
 *             </li>
 *          </ul>
 *          <p>You can use the following operations to enable or disable AWS Health from working
 *          with AWS Organizations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>EnableHealthServiceAccessForOrganization</a>: Enables AWS Health
 *                to work with AWS Organizations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisableHealthServiceAccessForOrganization</a>: Disables
 *                AWS Health from working with AWS Organizations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeHealthServiceStatusForOrganization</a>: Status
 *                information about enabling or disabling AWS Health from working with
 *                AWS Organizations.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>The Health API requires a Business or Enterprise support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>. Calling the Health API
 *          from an account that does not have a Business or Enterprise support plan causes a
 *             <code>SubscriptionRequiredException</code>.</p>
 *          <p>For authentication of requests, AWS Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *             Process</a>.</p>
 *          <p>See the <a href="https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html">AWS Health User Guide</a> for information about how to use the API.</p>
 *          <p>
 *             <b>Service Endpoint</b>
 *          </p>
 *          <p>The HTTP endpoint for the AWS Health API is:</p>
 *          <ul>
 *             <li>
 *                <p>https://health.us-east-1.amazonaws.com </p>
 *             </li>
 *          </ul>
 */
class Health extends HealthClient_1.HealthClient {
    describeAffectedAccountsForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeAffectedAccountsForOrganizationCommand_1.DescribeAffectedAccountsForOrganizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAffectedEntities(args, optionsOrCb, cb) {
        const command = new DescribeAffectedEntitiesCommand_1.DescribeAffectedEntitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAffectedEntitiesForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeAffectedEntitiesForOrganizationCommand_1.DescribeAffectedEntitiesForOrganizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEntityAggregates(args, optionsOrCb, cb) {
        const command = new DescribeEntityAggregatesCommand_1.DescribeEntityAggregatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventAggregates(args, optionsOrCb, cb) {
        const command = new DescribeEventAggregatesCommand_1.DescribeEventAggregatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventDetails(args, optionsOrCb, cb) {
        const command = new DescribeEventDetailsCommand_1.DescribeEventDetailsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventDetailsForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeEventDetailsForOrganizationCommand_1.DescribeEventDetailsForOrganizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventTypes(args, optionsOrCb, cb) {
        const command = new DescribeEventTypesCommand_1.DescribeEventTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEvents(args, optionsOrCb, cb) {
        const command = new DescribeEventsCommand_1.DescribeEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventsForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeEventsForOrganizationCommand_1.DescribeEventsForOrganizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHealthServiceStatusForOrganization(args, optionsOrCb, cb) {
        const command = new DescribeHealthServiceStatusForOrganizationCommand_1.DescribeHealthServiceStatusForOrganizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableHealthServiceAccessForOrganization(args, optionsOrCb, cb) {
        const command = new DisableHealthServiceAccessForOrganizationCommand_1.DisableHealthServiceAccessForOrganizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableHealthServiceAccessForOrganization(args, optionsOrCb, cb) {
        const command = new EnableHealthServiceAccessForOrganizationCommand_1.EnableHealthServiceAccessForOrganizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Health = Health;
//# sourceMappingURL=Health.js.map