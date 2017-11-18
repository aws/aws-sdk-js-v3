

class Tester {
    constructor(field, foo, bar) {
        this.field = field;
        this.foo = foo;
        this.bar = bar;
    }
};

const A = Tester.bind(null, 'a');
const B = Tester.bind(null, 'b');
const C = Tester.bind(null, 'c');

console.log(`A === B: ${A === B}`);
console.log(`A === C: ${A === C}`);
console.log(`B === C: ${B === C}`);

const a = new A('a-', 'a+');
const b = new B('b-', 'b+');
const c = new C('c-', 'c+');

console.log(`a.field: ${a.field}, a.foo: ${a.foo}, a.bar: ${a.bar}`);
console.log(`b.field: ${b.field}, b.foo: ${b.foo}, b.bar: ${b.bar}`);
console.log(`c.field: ${c.field}, c.foo: ${c.foo}, c.bar: ${c.bar}`);

